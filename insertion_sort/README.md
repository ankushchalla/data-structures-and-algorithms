
## Pseudocode
1. Start by picking the second element of the array.
2. Now compare the second element with the one before it and swap if necessary.
3. Continue to the next element. If it is in the incorrect order, **iterate through the sorted portion**
    (i.e. the left side) to place the element in the correct place.
4. Repeat until the array is sorted.

## Notes
- Builds up the sort by gradually creating a larger left side which is always sorted.