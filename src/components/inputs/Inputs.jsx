import styled, { css } from 'styled-components'
import '../../../src/styles/global.css'
import { ReactComponent as ChevronDown } from '../../assets/icons/chevron-down.svg'

const InputsStyles = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-family: 'Poppins', sans-serif;
        color: var(--spacial-grey);
        font-size: 0.75rem;
        font-weight: 500;
        margin: 0 0 1px 13px;
    }

    input, select {
        border: 0;
        background-color: var(--grey1);
        border-radius: 50rem;
        font-size: 0.75rem;
        padding: 0.5rem 1rem;
        color: var(--grey4);

        ::placeholder{
            font-family: 'Roboto', sans-serif;
            color: var(--grey4);
        }

        :focus {
            border: 0;
        }
        
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    select#selects{
        background-image: url('https://cdn3.iconfinder.com/data/icons/arrows-149/512/directional-chevron-down-512.png');
        background-repeat: no-repeat;
        background-position-x: 98%;
        background-position-y: 3px;
        background-size: 25px;
    }

    input#search{
        background-image: url('https://images.vexels.com/media/users/3/195032/isolated/preview/5c8f453f712deaccf64d803b6578abd6-escola-de-icones-lisos-de-lupa.png');
        background-repeat: no-repeat;
        background-position-x: 98%;
        background-position-y: 50%;
        background-size: 20px;
    }
`


export function InputText({ label, placeholder, ...rest }) {
    return(
        <InputsStyles {...rest}>
            <label for='text'>{label}</label>
            <input type="text" id='text' placeholder={placeholder} />
        </InputsStyles>
    )
} 

export function InputSelect({ label, placeholder, ...rest }) {
    return(
        <InputsStyles {...rest}>
            <label for='selects'>{label}</label>
            <select name='select' id='selects'>
                <option value='valor 1'>Valor 1</option>
                <option value='valor 2'>Valor 2</option>
                <option value='valor 3'>Valor 3</option>
            </select>
        </InputsStyles>
    )
} 

export function InputDate({ label, ...rest }) {
    return(
        <InputsStyles {...rest}>
            <label for='date'>{label}</label>
            <input type='date' id='date' />
        </InputsStyles>
    )
}

export function SearchInput({ label, ...rest }) {
    return(
        <InputsStyles {...rest}>
            <label for='search'>{label}</label>
            <input type='search' id='search' />
        </InputsStyles>
    )
}