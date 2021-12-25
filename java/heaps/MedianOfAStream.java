import java.util.PriorityQueue;

class MedianOfAStream {

  PriorityQueue<Integer> maxHeap;
  PriorityQueue<Integer> minHeap;

  // MedianOfAStream Constructor
  public MedianOfAStream() {
    maxHeap = new PriorityQueue<>((a, b) -> b - a); // organizing from large to small (largest integer at the head of
                                                    // the queue)
    minHeap = new PriorityQueue<>((a, b) -> a - b); // organizing from small to large (smallest integer at the head of
                                                    // the queue)
  }

  public void insertNum(int num) {
    if (maxHeap.isEmpty() || maxHeap.peek() >= num) {
      maxHeap.add(num);
    } else {
      minHeap.add(num);
    }

    if (maxHeap.size() > minHeap.size() + 1) {
      minHeap.add(maxHeap.poll());
    } else if (maxHeap.size() < minHeap.size()) {
      maxHeap.add(minHeap.poll());
    }
  }

  public double getMedian() {
    if (maxHeap.size() == minHeap.size())
      return (maxHeap.peek() + minHeap.peek()) / 2.0;
    return maxHeap.peek();
  }

  public static void main(String[] args) {
    MedianOfAStream medianOfAStream = new MedianOfAStream();
    medianOfAStream.insertNum(2);
    medianOfAStream.insertNum(10);
    medianOfAStream.insertNum(20);
    medianOfAStream.insertNum(5);
    System.out.println("Get the median number of the list: " + medianOfAStream.getMedian());
    medianOfAStream.insertNum(22);
    System.out.println("Get the mediian number of the list: " + medianOfAStream.getMedian());
  }
}

/*
 * Complexity Analysis:
 *
 * Time: O(logn) for inserting the number into the HEAP and O(1) to get the
 * median .peek()
 *
 * Space: O(n) for storing all the integer in the HEAP
 */