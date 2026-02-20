/*This choose your own adventure game that I made will take you on a journey of 3 friends as they try to survive the
worst night of their lives. When they are all hanging out a killer breaks into the house and chaos ensues. It is
all up to you on where the story goes depending on your descisions and that will affect the outcome of the story.*/
package textGame;

import database.DatabaseManager;
import part2.Player;

//Entry point for the Choose Your Own Adventure game that initializes the database and loads player stats
public class Main{
    public static void main(String[] args){
        //Initialize database
        DatabaseManager db = new DatabaseManager();
        db.createTable();

        //Insert a player row (only runs once; duplicates will be ignored)
        db.insertPlayer(1, "Ethan", 120, 1);

        //Create the player using DB values
        Player ethan = new Player("Ethan", 1);

        System.out.println("Welcome, Ethan.");
        System.out.println("Your starting health (from DB): " + ethan.getHealth());

        //TODO: Continue game logic here
    }
}
