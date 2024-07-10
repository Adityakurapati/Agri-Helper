import mongoose from 'mongoose';

const connection={}; // Make sure connection is defined outside the function scope

const connectToDB=async () =>
{
        try
        {
                if ( connection.isConnected )
                {
                        console.log( "Database Already Connected" );
                        return;
                } else
                {
                        const db=await mongoose.connect(
                                'mongodb+srv://champ:champ@cluster0.cfmhwiy.mongodb.net/Safire?retryWrites=true&w=majority&appName=Cluster0',
                                {
                                        useNewUrlParser: true,
                                        useUnifiedTopology: true,
                                }
                        );
                        console.log( "Connected To Mongo DB Successfully" );
                        connection.isConnected=db.connections[ 0 ].readyState;
                        console.log( `State ${ connection.isConnected }` );
                }
        } catch ( error )
        {
                console.error( "Error connecting to the database", error );
                throw new Error( error );
        }
};

mongoose.connection.on( 'connected', () => console.log( 'connected' ) );
mongoose.connection.on( 'open', () => console.log( 'open' ) );
mongoose.connection.on( 'disconnected', () => console.log( 'disconnected' ) );
mongoose.connection.on( 'reconnected', () => console.log( 'reconnected' ) );
mongoose.connection.on( 'disconnecting', () => console.log( 'disconnecting' ) );
mongoose.connection.on( 'close', () => console.log( 'close' ) );

export { connectToDB };
