// Simple test to verify the PathfindingService fix
const { PathfindingService } = require('./lib/services/PathfindingService.ts');

try {
  console.log('Creating PathfindingService instance...');
  const pathfinding = new PathfindingService(40, 40, 2);
  console.log('✓ PathfindingService created successfully');
  console.log('Grid dimensions:', pathfinding.getDebugInfo().gridSize);
  console.log('Static obstacles:', pathfinding.getDebugInfo().staticObstacles);
  console.log('Fix verified - no errors!');
} catch (error) {
  console.error('✗ Error:', error.message);
  console.error(error.stack);
}