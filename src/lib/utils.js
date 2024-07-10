import mongoose from 'mongoose';

const _setup={}; // Make sure _setup is defined outside the function scope

const connectToDB=async () =>
{
        try
        {
                if ( _setup.isConnected )
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
                        _setup.isConnected=db.connections[ 0 ].readyState;
                        console.log( `State ${ _setup.isConnected }` );

                }
        } catch ( error )
        {
                console.error( "Error connecting to the database", error );
                throw new Error( error );
        }
};

export { connectToDB };
