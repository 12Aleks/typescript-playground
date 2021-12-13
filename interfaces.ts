//interfaces tip dla objekt || class

interface Rect{
   readonly id: string  //readonly - tolko dla cztenia
   color?: string  // ? - nie obazatelnoje pole
   size: {
       width: number
       height: number
   }
}

const rect1: Rect = {
    id: "1",
    size: {
        width: 10,
        height: 30
    },
    color: "#ccc"
}

const rect2: Rect = {
    id: "2",
    size: {
        width: 30,
        height: 30
    },
    
}

rect2.color = '#fff'

//pramoje ukazanie k kakomu objektu prenadlezyt object
const rect3 = {} as Rect
//ili
const rect4 = <Rect>{}

//nasledowanie interfejsow

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '3',
    size: {
        width: 30,
        height: 30
    },
    getArea(): number{
        return this.size.width * this.size.height;
    }
}

//interfejsy wzaimodejstwujut s classami
//interface prinato nazywat s bolszoj I
interface IClock{
   time: Date
   setTime(date: Date): void
}

class Clock implements IClock{
  time: Date = new Date()
  setTime(date: Date): void {
      this.time = date
  }
}

//interfejs dla bolszogo objekta s denamiczeskimi kluczami, cztob wse elementy nie propisywat 
interface Styles{
    [key: string]: string
}

const css = {
    border: '1px solid black',
    marginTop: '20px',
    borderRadius: '30px'
}