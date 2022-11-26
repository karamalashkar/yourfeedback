const Select = (props)=>{
    return(
        <>
            <select
            onChange={e => props.setValue(e.target.value)}
            onFocus={() => props.setError('')}
            className='w-3/5 p-3 my-2 border border-gray-300 outline-none bg-white rounded-lg'> 
                <option value={''}>Category</option>  
                <option value={'1'}>Market</option>
                <option value={'2'}>Medical Center</option>
                <option value={'3'}>Gym</option>
                <option value={'4'}>Restaurant</option>
            </select>
        </> 
    )
}

export default Select;