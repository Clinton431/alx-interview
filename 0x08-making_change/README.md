# Coin Change Problem 🪙

A comprehensive solution to the classic **Coin Change Problem** using multiple algorithmic approaches with detailed explanations and performance analysis.

## 📋 Problem Description

Given a pile of coins of different values, determine the **fewest number of coins** needed to meet a given amount `total`.

### Function Prototype
```python
def makeChange(coins, total)
```

### Requirements
- **Input**: 
  - `coins`: List of coin denominations (integers > 0)
  - `total`: Target amount to make
- **Output**: 
  - Minimum number of coins needed
  - Return `0` if total ≤ 0
  - Return `-1` if total cannot be made
- **Assumptions**: 
  - Infinite supply of each coin denomination
  - All coin values are positive integers

## 🎯 Examples

```python
# Example 1: Standard case
makeChange([1, 2, 5], 11)  # Returns 3 (5+5+1)

# Example 2: Impossible case
makeChange([2], 3)         # Returns -1 (cannot make 3 with only 2s)

# Example 3: Edge case
makeChange([1, 3, 4], 6)   # Returns 2 (3+3, not 4+1+1)
```

## 🔧 Algorithms Implemented

### 1. Dynamic Programming (Recommended) ⭐
- **Time Complexity**: O(total × len(coins))
- **Space Complexity**: O(total)
- **Best for**: All cases, guaranteed optimal solution

```python
def makeChange(coins, total):
    if total <= 0:
        return 0
    
    dp = [float('inf')] * (total + 1)
    dp[0] = 0
    
    for amount in range(1, total + 1):
        for coin in coins:
            if coin <= amount:
                dp[amount] = min(dp[amount], dp[amount - coin] + 1)
    
    return dp[total] if dp[total] != float('inf') else -1
```

### 2. Recursive with Memoization
- **Time Complexity**: O(total × len(coins))
- **Space Complexity**: O(total)
- **Best for**: Understanding the recursive nature of the problem

### 3. Greedy Algorithm ⚠️
- **Time Complexity**: O(coins×log(coins) + total/min_coin)
- **Space Complexity**: O(1)
- **Warning**: Only works for specific coin systems (like standard currency)

### 4. Path Tracking Solution
- Returns both minimum coins and the actual coin sequence used
- Useful for debugging and understanding the solution

## 🚀 Usage

### Basic Usage
```python
from coin_change import makeChange

# Simple case
result = makeChange([1, 5, 10, 25], 30)
print(f"Minimum coins needed: {result}")  # Output: 2

# Test edge cases
print(makeChange([1, 2, 5], 0))   # Output: 0
print(makeChange([2], 3))         # Output: -1
```

### Running Tests
```bash
python coin_change.py
```

This will run comprehensive tests comparing all algorithms and show performance analysis.

## 📊 Performance Analysis

| Algorithm | Time Complexity | Space Complexity | Always Optimal? |
|-----------|----------------|------------------|-----------------|
| Dynamic Programming | O(total × coins) | O(total) | ✅ Yes |
| Recursive + Memo | O(total × coins) | O(total) | ✅ Yes |
| Greedy | O(coins×log(coins)) | O(1) | ❌ No |

## 🧠 Algorithm Explanation

### Why Dynamic Programming Works

The coin change problem exhibits:

1. **Optimal Substructure**: The optimal solution contains optimal solutions to subproblems
2. **Overlapping Subproblems**: Same smaller amounts calculated multiple times

### DP Approach Breakdown

```
For coins=[1,2,5] and total=11:

dp[0] = 0     (base case)
dp[1] = 1     (one 1-coin)
dp[2] = 1     (one 2-coin)
dp[3] = 2     (1+2 coins)
dp[4] = 2     (2+2 coins)
dp[5] = 1     (one 5-coin)
dp[6] = 2     (5+1 coins)
...
dp[11] = 3    (5+5+1 coins)
```

### Why Greedy Fails

**Counter-example**: coins=[1,3,4], total=6
- **Greedy**: 4+1+1 = 3 coins
- **Optimal**: 3+3 = 2 coins

## 🔍 Key Insights

1. **Not all coin systems allow greedy solutions** - Only works for "canonical" coin systems
2. **Dynamic Programming is universal** - Always finds optimal solution
3. **Space-time tradeoff** - We trade O(total) space for O(total × coins) time efficiency
4. **Bottom-up approach** - Build solutions from smaller subproblems

## 🎓 Learning Objectives

After studying this implementation, you should understand:

- [ ] How to identify optimal substructure in problems
- [ ] When and why dynamic programming is the right approach
- [ ] The difference between greedy and optimal solutions
- [ ] How to analyze time and space complexity
- [ ] How to implement and test multiple algorithmic approaches

## 📝 Interview Tips

Common follow-up questions:
1. **"What if we want to track which coins were used?"** → Use path tracking version
2. **"Can we optimize space complexity?"** → Yes, but only if we don't need the path
3. **"Why not use greedy?"** → Explain with counter-examples
4. **"How would you test this?"** → Edge cases, large inputs, invalid inputs

## 🔧 Technical Requirements

- **Python 3.6+**
- **No external dependencies**
- **Follows PEP 8 style guidelines**
- **Comprehensive docstrings and comments**

## 🤝 Contributing

Feel free to:
- Add more test cases
- Implement additional optimization techniques
- Add visualization features
- Improve documentation

## 📚 Related Problems

- **0/1 Knapsack Problem**
- **Rod Cutting Problem**
- **Minimum Path Sum**
- **Fibonacci Sequence**

---

*This implementation serves as both a practical solution and an educational resource for understanding dynamic programming concepts.*
