//types
const str: string = 'Hello'

const isFetching: boolean = true; 
const isLoading: boolean = false;

const int: number = 42

const massege: string = "Hello"

const arrNumber: number[] = [1,2,3,4,5,6,7];
//generic type
const arrNumberArray2: Array<number> = [12,23,34,45,56,67,78]

const words: string[] = ['Typescript', 'test']

//Tuple masiw iz raznych tipow dannych
const contact: [string, number] = ['Alex', 234_343_343]

//Any - pozwolajet perezapisat peremennuju na nowyj tip dannych
let variable: any = 43
variable = 'New string'

//function 
//:void - function niczego nie wozwraszajet

function sayMyName(name: string): void{
    console.log(name)
}
sayMyName('Bob')

//Never
function throwError(message: string): never{
   throw new Error(message)
}

function infinite():never{
   while(true){

   }
}

//Swoi tipy

type Login = string

const login: Login  = 'admin'

type ID = string | number
const Id1: ID = 12345
const Id2 : ID = "12345"

type SomeType = string | null | undefined