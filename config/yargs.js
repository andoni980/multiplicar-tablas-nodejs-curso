const argv = require( 'yargs' )
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Define la base de la tabla multiplicar'
    } )
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Imprime la tabla en consola'
    } )
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Declara el limite del multiplo'
    } )
    .check( ( argv, options ) =>
    {
        if ( isNaN( argv.b ) )
        {
            throw 'La base ha de ser un numero'
        }
        return true;
    } )
    .argv;


module.exports = argv;