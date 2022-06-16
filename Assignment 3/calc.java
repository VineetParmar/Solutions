package calc;
 

import java.util.*;
public class calc {

	public static void main(String[] args) {
		
	    Scanner inputData = new Scanner(System.in);
	    
	    System.out.println("Enter a Sentence(any English sentence)");
	    String sentence = inputData.nextLine();
	    System.out.println("Enter a Letter(any letter from A to Z)");
	    String letter = inputData.nextLine();
	    
	    int index = sentence.indexOf(letter);
	   
	    if(index == -1){
	        System.out.println("The letter does not exist in the sentence");
	    }else{
	        System.out.println(sentence.substring(index+1));
	    }
	}

}