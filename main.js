//Choose Your Own Adventure game by Nai'a Suda
package TextGame;

//Logging structure
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class main{
    //Initial Log4J logger for the application
    private static final Logger logger = LogManager.getLogger(main.class);

    public static void main(String[] args){
        logger.info("Application started.");
        try{
            logger.info("Attempting to run game initialization...");
            //Placeholder for the game logic
            initializeGame();
        }
        catch (Exception e){
            //Basic exception handling structure
            logger.error("An error occurred during game initialization.", e);
            System.out.println("Something went wrong while starting the game.");
        }
        finally{
            //This block will always run
            logger.info("Application shutting down (finally block executed).");
        }
    }

    //Placeholder method to demonstrate exception handling and logging
    private static void initializeGame() throws Exception{
        logger.debug("Inside initializeGame() method.");

        //Forced exception to test logging and which will be replaced with real logic later on
        throw new Exception("Test exception for initial logging structure.");
    }
}
