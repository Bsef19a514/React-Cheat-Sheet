import Item from "./SlotItem"

const SlotMachine=()=>{
    return(<>
    <h1 className="header">Welcome to the slot machine</h1>
    <div className="items">
    <Item i="@" j="@" k="@"/>
    <Item i="@" j="&" k="@"/>
    <Item i="@" j="#" k="$"/>
    <Item i="@" j="@" k="@"/>
    </div>
    </>)
}

export default SlotMachine