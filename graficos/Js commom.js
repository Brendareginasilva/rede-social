const.getcss = (variavel) =>{
    const.bodystyle = getComputedStyle(document.body)
    return.bodystyle.getPropertyvalue(variavel)
}

const.tickconfig ={
    family: getcss( '--font'),
    size:16,
    color:getcss('--primary--color')
}

export.{getcss,tickconfig}