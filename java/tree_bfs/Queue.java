/*
  @requirement: Create an instance of a queue (FIFO) using LinkedList with its essential operations: enqueue, dequeue, and peek
  @param: void
  @return: void
*/

import java.util.LinkedList;

class Queue {
  public static void main(String[] args) {
    LinkedList<Integer> queue = new LinkedList<>();
    // Add 4 and 5 to the LinkedList
    queue.add(4);
    queue.add(5);
    // Display the queue
    System.out.println("Dispaying the queue: " + queue);
    // Display the tail (last element) of the queue
    System.out.println("Printing the last element of the LinkedList: " + queue.getLast());
    // Remove the first element from the queue
    System.out.println("Dequequing the first element: " + queue.removeFirst());
    // Display the queue after the first element removed
    System.out.println("Displaying the queue after the first element removed: " + queue);
  }
}