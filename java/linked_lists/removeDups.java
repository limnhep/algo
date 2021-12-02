import java.util.HashSet;
import java.util.Set;
import java.util.LinkedList;
import java.util.List;

class RemoveDuplicates {
  public static void main(String[] args) {
    LinkedList<Integer> inputLinkedList = new LinkedList<>();
    inputLinkedList.add(5);
    inputLinkedList.add(5);
    inputLinkedList.add(19);
    inputLinkedList.add(20);
    System.out.println(inputLinkedList);
    RemoveDuplicates.removeDups(inputLinkedList);
    System.out.println(inputLinkedList);
  }

  static void removeDups(LinkedList<Integer> n) {
    Set<Integer> containerSet = new HashSet<>();
    for (int i = 0; i < n.size(); i++) {
      if (containerSet.contains(n.get(i))) {
        n.remove(i);
      } else {
        n.add(n.get(i));
      }
    }
  }
}