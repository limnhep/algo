def twoNumberSum(array: List[int], targetSum: int) -> List[int]:
    targetObj = {}
    for num in array:
        potentialTarget = targetSum - num
        if potentialTarget in targetObj:
            return [potentialTarget, num]
        else:
            targetObj[num] = True
    return []


print(twoNumberSum([2, 3, 5], 8))