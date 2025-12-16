import type { Vector3, InteractiveObject } from "../types/gameTypes"

/**
 * PathfindingService - Advanced Navigation for AI Caregivers
 * Provides sophisticated pathfinding using A* algorithm with dynamic obstacle avoidance
 * Optimized for the daycare environment with special consideration for child safety
 */
export class PathfindingService {
  private grid: boolean[][]
  private gridWidth: number
  private gridHeight: number
  private cellSize: number
  private obstacles: Set<string> = new Set()
  private dynamicObstacles: Map<string, { position: Vector3; radius: number; expiresAt?: number }> = new Map()

  constructor(gridWidth = 40, gridHeight = 40, cellSize = 2) {
    this.gridWidth = gridWidth
    this.gridHeight = gridHeight
    this.cellSize = cellSize
    this.grid = this.createGrid()
  }

  /**
   * Create the initial grid for the daycare environment
   */
  private createGrid(): boolean[][] {
    const grid: boolean[][] = []

    for (let x = 0; x < this.gridWidth; x++) {
      grid[x] = []
      for (let y = 0; y < this.gridHeight; y++) {
        // Mark boundaries as blocked
        if (x === 0 || x === this.gridWidth - 1 || y === 0 || y === this.gridHeight - 1) {
          grid[x][y] = false // Blocked
        } else {
          grid[x][y] = true // Walkable
        }
      }
    }

    // Add static obstacles (walls, furniture)
    this.addStaticObstacles(grid)

    return grid
  }

  /**
   * Add static obstacles for the daycare environment
   */
  private addStaticObstacles(grid: boolean[][]): void {
    // Interior walls (simplified daycare layout)
    this.addRectangularObstacle(grid, 15, 15, 10, 1, "interior_wall_1")
    this.addRectangularObstacle(grid, 25, 20, 1, 8, "interior_wall_2")
    this.addRectangularObstacle(grid, 5, 25, 15, 1, "interior_wall_3")

    // Furniture areas
    this.addRectangularObstacle(grid, 8, 8, 3, 3, "toy_storage")
    this.addRectangularObstacle(grid, 30, 12, 4, 2, "bookshelf")
    this.addRectangularObstacle(grid, 12, 30, 6, 3, "changing_area")

    // Kitchen/Bathroom areas (blocked for safety)
    this.addRectangularObstacle(grid, 2, 2, 6, 4, "kitchen_area")
    this.addRectangularObstacle(grid, 32, 32, 6, 6, "bathroom_area")

    // Play equipment (circular obstacles)
    this.addCircularObstacle(grid, 20, 10, 2, "slide")
    this.addCircularObstacle(grid, 15, 25, 2.5, "climbing_structure")
    this.addCircularObstacle(grid, 28, 18, 1.5, "toy_chest")
  }

  /**
   * Add a rectangular obstacle to the grid
   */
  private addRectangularObstacle(
    grid: boolean[][],
    startX: number,
    startY: number,
    width: number,
    height: number,
    id: string,
  ): void {
    for (let x = startX; x < startX + width && x < this.gridWidth; x++) {
      for (let y = startY; y < startY + height && y < this.gridHeight; y++) {
        if (x >= 0 && y >= 0) {
          grid[x][y] = false // Blocked
        }
      }
    }
    this.obstacles.add(id)
  }

  /**
   * Add a circular obstacle to the grid
   */
  private addCircularObstacle(grid: boolean[][], centerX: number, centerY: number, radius: number, id: string): void {
    const radiusSquared = radius * radius

    // Calculate integer bounds for the loop to avoid floating-point array indices
    const startX = Math.max(0, Math.floor(centerX - radius))
    const endX = Math.min(this.gridWidth, Math.ceil(centerX + radius))
    const startY = Math.max(0, Math.floor(centerY - radius))
    const endY = Math.min(this.gridHeight, Math.ceil(centerY + radius))

    for (let x = startX; x < endX; x++) {
      for (let y = startY; y < endY; y++) {
        // Additional bounds check to prevent undefined access
        if (x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight) {
          const distanceSquared = (x - centerX) * (x - centerX) + (y - centerY) * (y - centerY)
          if (distanceSquared <= radiusSquared) {
            grid[x][y] = false // Blocked
          }
        }
      }
    }
    this.obstacles.add(id)
  }

  /**
   * Add dynamic obstacle (other players, temporary objects)
   */
  addDynamicObstacle(id: string, position: Vector3, radius: number, durationMs?: number): void {
    const expiresAt = durationMs ? Date.now() + durationMs : undefined
    this.dynamicObstacles.set(id, { position, radius, expiresAt })

    // Clean up expired obstacles periodically
    if (expiresAt) {
      setTimeout(() => {
        this.dynamicObstacles.delete(id)
      }, durationMs)
    }
  }

  /**
   * Remove dynamic obstacle
   */
  removeDynamicObstacle(id: string): void {
    this.dynamicObstacles.delete(id)
  }

  /**
   * Find path using A* algorithm
   */
  findPath(start: Vector3, end: Vector3, avoidDynamicObstacles = true): Vector3[] {
    const startNode = this.worldToGrid(start)
    const endNode = this.worldToGrid(end)

    // Validate start and end positions
    if (!this.isValidPosition(startNode.x, startNode.y) || !this.isValidPosition(endNode.x, endNode.y)) {
      console.warn("Invalid start or end position for pathfinding")
      return []
    }

    // If start and end are the same
    if (startNode.x === endNode.x && startNode.y === endNode.y) {
      return [start]
    }

    const openSet: Array<{ x: number; y: number; g: number; h: number; f: number; parent?: { x: number; y: number } }> =
      []
    const closedSet: Set<string> = new Set()
    const cameFrom: Map<string, { x: number; y: number }> = new Map()

    // Add start node to open set
    const startKey = `${startNode.x},${startNode.y}`
    const hStart = this.heuristic(startNode, endNode)
    openSet.push({ x: startNode.x, y: startNode.y, g: 0, h: hStart, f: hStart })

    while (openSet.length > 0) {
      // Find node with lowest f score
      let currentIndex = 0
      for (let i = 1; i < openSet.length; i++) {
        if (openSet[i].f < openSet[currentIndex].f) {
          currentIndex = i
        }
      }
      const current = openSet.splice(currentIndex, 1)[0]
      const currentKey = `${current.x},${current.y}`

      // Add to closed set
      closedSet.add(currentKey)

      // Check if we reached the goal
      if (current.x === endNode.x && current.y === endNode.y) {
        return this.reconstructPath(cameFrom, current, start, end)
      }

      // Check neighbors
      const neighbors = this.getNeighbors(current.x, current.y, avoidDynamicObstacles)
      for (const neighbor of neighbors) {
        const neighborKey = `${neighbor.x},${neighbor.y}`

        if (closedSet.has(neighborKey)) {
          continue
        }

        const tentativeG = current.g + this.getMovementCost(current, neighbor)

        // Check if this path to neighbor is better
        const existingNodeIndex = openSet.findIndex((node) => node.x === neighbor.x && node.y === neighbor.y)

        if (existingNodeIndex === -1) {
          // New node
          const g = tentativeG
          const h = this.heuristic(neighbor, endNode)
          const f = g + h

          openSet.push({ x: neighbor.x, y: neighbor.y, g, h, f, parent: { x: current.x, y: current.y } })
          cameFrom.set(neighborKey, { x: current.x, y: current.y })
        } else if (tentativeG < openSet[existingNodeIndex].g) {
          // Better path found
          openSet[existingNodeIndex].g = tentativeG
          openSet[existingNodeIndex].f = tentativeG + openSet[existingNodeIndex].h
          openSet[existingNodeIndex].parent = { x: current.x, y: current.y }
          cameFrom.set(neighborKey, { x: current.x, y: current.y })
        }
      }
    }

    // No path found
    console.warn("No path found from", start, "to", end)
    return []
  }

  /**
   * Get walkable neighbors for a position
   */
  private getNeighbors(x: number, y: number, avoidDynamicObstacles: boolean): Array<{ x: number; y: number }> {
    const neighbors: Array<{ x: number; y: number }> = []
    const directions = [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ]

    for (const dir of directions) {
      const newX = x + dir.x
      const newY = y + dir.y

      if (this.isWalkable(newX, newY, avoidDynamicObstacles)) {
        neighbors.push({ x: newX, y: newY })
      }
    }

    return neighbors
  }

  /**
   * Check if a position is walkable
   */
  private isWalkable(x: number, y: number, avoidDynamicObstacles: boolean): boolean {
    // Check grid bounds
    if (!this.isValidPosition(x, y)) {
      return false
    }

    // Check static obstacles
    if (!this.grid[x][y]) {
      return false
    }

    // Check dynamic obstacles
    if (avoidDynamicObstacles) {
      const worldPos = this.gridToWorld({ x, y })
      this.dynamicObstacles.forEach((obstacle, id) => {
        if (obstacle.expiresAt && Date.now() > obstacle.expiresAt) {
          return // Skip expired obstacles
        }

        const distance = this.calculateDistance(worldPos, obstacle.position)
        if (distance < obstacle.radius + 0.5) {
          // Add small buffer
          return false
        }
      })
    }

    return true
  }

  /**
   * Check if position is within grid bounds
   */
  private isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight
  }

  /**
   * Calculate heuristic (Manhattan distance for 4-directional, Euclidean for 8-directional)
   */
  private heuristic(a: { x: number; y: number }, b: { x: number; y: number }): number {
    const dx = Math.abs(a.x - b.x)
    const dy = Math.abs(a.y - b.y)
    return Math.sqrt(dx * dx + dy * dy) // Euclidean distance
  }

  /**
   * Calculate movement cost between two nodes
   */
  private getMovementCost(a: { x: number; y: number }, b: { x: number; y: number }): number {
    const dx = Math.abs(a.x - b.x)
    const dy = Math.abs(a.y - b.y)

    // Diagonal movement costs more
    if (dx === 1 && dy === 1) {
      return Math.SQRT2 // ~1.414
    }

    return 1 // Straight movement
  }

  /**
   * Reconstruct path from cameFrom map
   */
  private reconstructPath(
    cameFrom: Map<string, { x: number; y: number }>,
    current: { x: number; y: number },
    startWorld: Vector3,
    endWorld: Vector3,
  ): Vector3[] {
    const path: Vector3[] = []

    // Add end position
    path.unshift(endWorld)

    // Work backwards from current node
    let currentKey = `${current.x},${current.y}`
    while (cameFrom.has(currentKey)) {
      const parent = cameFrom.get(currentKey)!
      const parentWorld = this.gridToWorld(parent)
      path.unshift(parentWorld)
      currentKey = `${parent.x},${parent.y}`
    }

    // Add start position
    path.unshift(startWorld)

    return path
  }

  /**
   * Convert world coordinates to grid coordinates
   */
  private worldToGrid(position: Vector3): { x: number; y: number } {
    return {
      x: Math.floor((position.x + (this.gridWidth * this.cellSize) / 2) / this.cellSize),
      y: Math.floor((position.z + (this.gridHeight * this.cellSize) / 2) / this.cellSize),
    }
  }

  /**
   * Convert grid coordinates to world coordinates
   */
  private gridToWorld(gridPos: { x: number; y: number }): Vector3 {
    return {
      x: gridPos.x * this.cellSize - (this.gridWidth * this.cellSize) / 2,
      y: 0,
      z: gridPos.y * this.cellSize - (this.gridHeight * this.cellSize) / 2,
    }
  }

  /**
   * Calculate distance between two world positions
   */
  private calculateDistance(p1: Vector3, p2: Vector3): number {
    const dx = p1.x - p2.x
    const dz = p1.z - p2.z
    return Math.sqrt(dx * dx + dz * dz)
  }

  /**
   * Find nearest walkable position to a given point
   */
  findNearestWalkable(position: Vector3, maxSearchRadius = 5): Vector3 | null {
    const startGrid = this.worldToGrid(position)
    const searchRadius = Math.ceil(maxSearchRadius / this.cellSize)

    // Check center first
    if (this.isWalkable(startGrid.x, startGrid.y, true)) {
      return position
    }

    // Spiral search outward
    for (let radius = 1; radius <= searchRadius; radius++) {
      for (let x = startGrid.x - radius; x <= startGrid.x + radius; x++) {
        for (let y = startGrid.y - radius; y <= startGrid.y + radius; y++) {
          // Only check the perimeter of the current radius
          if (Math.abs(x - startGrid.x) === radius || Math.abs(y - startGrid.y) === radius) {
            if (this.isWalkable(x, y, true)) {
              return this.gridToWorld({ x, y })
            }
          }
        }
      }
    }

    return null // No walkable position found within radius
  }

  /**
   * Update grid with interactive objects
   */
  updateWithObjects(objects: InteractiveObject[]): void {
    // Clear existing dynamic obstacles from objects
    const objectKeysToRemove: string[] = []
    this.dynamicObstacles.forEach((obstacle, id) => {
      if (id.startsWith("object_")) {
        objectKeysToRemove.push(id)
      }
    })

    objectKeysToRemove.forEach((id) => {
      this.dynamicObstacles.delete(id)
    })

    // Add current objects as obstacles
    for (const obj of objects) {
      if (obj.isOccupied) {
        this.addDynamicObstacle(`object_${obj.id}`, obj.position, 1.5)
      }
    }
  }

  /**
   * Get pathfinding debug info
   */
  getDebugInfo(): {
    gridSize: { width: number; height: number }
    staticObstacles: string[]
    dynamicObstacles: number
    cellSize: number
  } {
    return {
      gridSize: { width: this.gridWidth, height: this.gridHeight },
      staticObstacles: Array.from(this.obstacles),
      dynamicObstacles: this.dynamicObstacles.size,
      cellSize: this.cellSize,
    }
  }

  /**
   * Smooth path using line-of-sight checks
   */
  smoothPath(path: Vector3[]): Vector3[] {
    if (path.length <= 2) {
      return path
    }

    const smoothedPath: Vector3[] = [path[0]]
    let currentIndex = 0

    while (currentIndex < path.length - 1) {
      let farthestReachable = currentIndex + 1

      // Find the farthest point we can reach in a straight line
      for (let i = currentIndex + 2; i < path.length; i++) {
        if (this.hasLineOfSight(path[currentIndex], path[i])) {
          farthestReachable = i
        } else {
          break
        }
      }

      smoothedPath.push(path[farthestReachable])
      currentIndex = farthestReachable
    }

    return smoothedPath
  }

  /**
   * Check if there's a line of sight between two points
   */
  private hasLineOfSight(start: Vector3, end: Vector3): boolean {
    const steps = Math.ceil(this.calculateDistance(start, end) / (this.cellSize / 2))

    for (let i = 1; i < steps; i++) {
      const t = i / steps
      const point = {
        x: start.x + (end.x - start.x) * t,
        y: 0,
        z: start.z + (end.z - start.z) * t,
      }

      const gridPos = this.worldToGrid(point)
      if (!this.isWalkable(gridPos.x, gridPos.y, true)) {
        return false
      }
    }

    return true
  }
}
