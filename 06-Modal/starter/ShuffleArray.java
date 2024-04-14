import java.util.Arrays;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 6};

        System.out.println("Original Array: " + Arrays.toString(nums));

        shuffleArray(nums);

        System.out.println("Shuffled Array: " + Arrays.toString(nums));
    }

    
    private static void shuffleArray(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            
            int randomIndex = (int) (Math.random() * (i + 1));

            
            int temp = nums[i];
            nums[i] = nums[randomIndex];
            nums[randomIndex] = temp;
        }
    }
}
