const Item=(props)=>{
    let {i,j,k}=props
    if(i===j && i===k){
        return (
            <div className="itemDiv">
                <h1 className="item">{i} {j} {k}</h1>
                <p className="result">Items are matching</p>
                <hr/>
            </div>
        )
    }else{
        return (
            <div className="itemDiv">
                <h1 className="item">{i} {j} {k}</h1>
                <p className="result">Items are not matching</p>
                <hr/>
            </div>
        )
    }
}

export default Item