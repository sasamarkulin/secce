import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Dropdown.css'

function Dropdown() {
    const url = 'https://614b0e7fe4cc2900179eaea4.mockapi.io/setccejob'
    const [dropdownOne, setDropdownOne] = useState([])
    const [dropdownTwo, setDropdownTwo] = useState([])
    const [dropdownOneStyle, setDropdownOneStyle] = useState([])
    const [dropdownTwoStyle, setDropdownTwoStyle] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => {
                // Putting select options into constants
                setDropdownOne(res.data[0].documentField[0].options.comboboxExtras.options)
                setDropdownTwo(res.data[0].documentField[1].options.comboboxExtras.options)
                // Putting styles into constants
                setDropdownOneStyle(res.data[0].documentField[0].options.visualisation)
                setDropdownTwoStyle(res.data[0].documentField[1].options.visualisation)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    console.log(dropdownOneStyle)
    
    const selectOneStyle = {
        borderWidth: dropdownOneStyle.borderWidth,
        borderColor: 'rgb(' + dropdownOneStyle.borderColor + ')',
        // borderStyle: dropdownOneStyle.borderStyle,   ----> doesn't work if its 'dot' has to be 'dotted'
        color: 'rgb(' + dropdownOneStyle.fontColor + ')',
        fontSize: dropdownOneStyle.fontSize,
        height: dropdownOneStyle.height + '%',
        padding: dropdownOneStyle.padding,
        left: '0.15%'
        // width: dropdownOneStyle.width + '%',     ----> seems too small 
    }

    const selectTwoStyle = {
        borderWidth: dropdownTwoStyle.borderWidth,
        borderColor: 'rgb(' + dropdownTwoStyle.borderColor + ')',
        // borderStyle: dropdownTwoStyle.borderStyle,
        color: 'rgb(' + dropdownTwoStyle.fontColor + ')',
        fontSize: dropdownTwoStyle.fontSize,
        height: dropdownTwoStyle.height + '%',
        padding: dropdownTwoStyle.padding,
        left: '0.15%'
        // width: dropdownOneStyle.width + '%',
    }
    

  return (
    <div>
        <select style={selectOneStyle}>
            {Object.keys(dropdownOne).map(key => (
                <option value={key}>{dropdownOne[key]}</option>
            ))}
        </select>
        <select style={selectTwoStyle}>
            {Object.keys(dropdownTwo).map(key => (
                <option value={key}>{dropdownTwo[key]}</option>
            ))}
        </select>
    </div>
    
  )
}

export default Dropdown