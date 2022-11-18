const Select = (props)=>{
    return(
        <>
            <select
            onChange={e => props.setValue(e.target.value)}
            onFocus={() => props.setError('')}
            className='w-1/2 p-3 my-2 border-2 border-black rounded-xl'> 
                <option value={''}>Category</option>  
                <option value={'1'}>Market</option>
                <option value={'2'}>Medical Center</option>
                <option value={'3'}>Gym</option>
            </select>
        </> 
    )
}

export default Select;