# N-Queens Solver

A fast, efficient implementation of solutions to the classic N-Queens problem in computer science and mathematics.

## What is the N-Queens Problem?

The N-Queens puzzle is the challenge of placing N chess queens on an N×N chessboard so that no two queens threaten each other. Thus, a solution requires that no two queens share the same row, column, or diagonal.

## Features

- Solve N-Queens for any board size where solutions exist
- Multiple algorithm implementations:
  - Backtracking
  - Branch and Bound
  - Genetic Algorithm
  - Simulated Annealing
- Visualize solutions in ASCII or graphical formats
- Performance benchmarking between different algorithms
- Multi-threading support for parallel solution finding
- Count all possible solutions for a given board size

## Installation

```bash
# Clone the repository
git clone https://github.com/clinton431/0-nqueens.py
cd n-queens-solver

# Option 1: Simple installation
pip install -e .

# Option 2: Installation with visualization dependencies
pip install -e .[viz]
```

## Quick Start

### Basic Usage

```python
from nqueens import NQueensSolver

# Create a solver for an 8x8 board
solver = NQueensSolver(n=8)

# Find one solution
solution = solver.solve()
print(solution)
# Output: [0, 4, 7, 5, 2, 6, 1, 3] (represents queen positions in each row)

# Display the solution as a board
solver.display(solution)
# Output:
# Q . . . . . . .
# . . . . . . Q .
# . . . . Q . . .
# . . . . . . . Q
# . Q . . . . . .
# . . . Q . . . .
# . . . . . Q . .
# . . Q . . . . .

# Find all solutions
all_solutions = solver.solve_all()
print(f"Found {len(all_solutions)} solutions")
```

### Using Different Algorithms

```python
from nqueens import NQueensSolver, Algorithm

# Using backtracking (default)
solver = NQueensSolver(n=8, algorithm=Algorithm.BACKTRACKING)

# Using simulated annealing
solver = NQueensSolver(n=8, algorithm=Algorithm.SIMULATED_ANNEALING)

# Using genetic algorithm
solver = NQueensSolver(n=8, algorithm=Algorithm.GENETIC)
```

### Visualization

```python
from nqueens import NQueensSolver, Visualizer

solver = NQueensSolver(n=8)
solution = solver.solve()

# ASCII visualization (default)
solver.display(solution)

# Using the advanced visualizer
viz = Visualizer(solver)
viz.show(solution)  # Opens a graphical window

# Save visualization as an image
viz.save(solution, "queens_solution.png")
```

## Benchmarking

The package includes benchmarking tools to compare algorithm performance:

```python
from nqueens import benchmark

# Compare all algorithms for n=8
results = benchmark.compare_algorithms(n=8)
benchmark.plot_results(results)

# Test scaling behavior of the backtracking algorithm
scaling = benchmark.test_scaling(algorithm="backtracking", n_range=range(4, 17))
benchmark.plot_scaling(scaling)
```

## Understanding the Solutions

Solutions are represented as a list of integers, where:
- The index represents the row number (0-based)
- The value represents the column position of the queen in that row (0-based)

For example, the solution `[1, 3, 0, 2]` for N=4 means:
- Row 0: Queen at column 1
- Row 1: Queen at column 3
- Row 2: Queen at column 0
- Row 3: Queen at column 2

## Solution Counts

Here are the known counts of solutions for different board sizes:

| Board Size | Solutions | Unique Solutions (accounting for symmetry) |
|------------|-----------|-------------------------------------------|
| 1          | 1         | 1                                         |
| 2          | 0         | 0                                         |
| 3          | 0         | 0                                         |
| 4          | 2         | 1                                         |
| 5          | 10        | 2                                         |
| 6          | 4         | 1                                         |
| 7          | 40        | 6                                         |
| 8          | 92        | 12                                        |
| 9          | 352       | 46                                        |
| 10         | 724       | 92                                        |
| 11         | 2,680     | 341                                       |
| 12         | 14,200    | 1,787                                     |

## Algorithm Details

### Backtracking

The backtracking algorithm works by placing queens row by row, checking constraints at each step and backtracking when conflicts are detected. Time complexity is approximately O(N!).

### Branch and Bound

An optimized backtracking approach that uses additional constraints to prune branches of the search tree early. Significantly faster than naive backtracking for larger board sizes.

### Simulated Annealing

A probabilistic technique that starts with a random placement and iteratively improves it through a temperature-controlled process that occasionally accepts worse states to escape local optima.

### Genetic Algorithm

Uses evolutionary principles with a population of board configurations. Solutions evolve through selection, crossover, and mutation operations to find optimal queen placements.

## Performance Considerations

- For N ≤ 15, the backtracking algorithm is typically fast enough for interactive use
- For 15 < N ≤ 100, the branch and bound algorithm offers reasonable performance
- For N > 100, heuristic methods like simulated annealing may be more appropriate
- Finding all solutions becomes impractical for N > 15 due to the exponential growth in solution count

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
Acknowledgments

The N-Queens problem was first published by Max Bezzel in 1848
Franz Nauck published the first solutions in 1850
This implementation is inspired by various algorithms developed over the years
Thanks to all contributors who have helped improve this project
