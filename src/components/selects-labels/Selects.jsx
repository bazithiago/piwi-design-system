import styled, { css } from 'styled-components'
import '../../../src/styles/global.css'
import { ReactComponent as PlusSelectIcon } from '../../assets/icons/plusSelect.svg'
import { ReactComponent as CheckSelectedIcon } from '../../assets/icons/checkSelected.svg'

const SelectTabStyles = styled.button`
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    border: 0;
    color: var(--grey4);
    cursor: pointer;
    font-size: 0.7rem;
    border-bottom: 2px solid transparent;
    padding: 0 0 1px 0;
    
    :hover {
        filter: brightness(1.1);
        border-bottom: 2px solid var(--blue);
        color: var(--blue);
    }

    ${props => props.isSelected && css`
        filter: brightness(1.1);
        border-bottom: 2px solid var(--blue);
        color: var(--blue);
    `}
`

const SelectOptionsStyles = styled.a`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: var(--grey4);
    font-size: 0.75rem;
    cursor: pointer;

    svg {
        transform: scale(0.9);
        margin-right: 0.5rem;
    }

    :hover{
        filter: brightness(0.7);
    }

    ${props => props.isSelected && css`
        :hover{
            filter: brightness(1.1);
        }
    `}
`

const SelectListStyles = styled.a`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: var(--grey4);
    font-size: 0.75rem;
    cursor: pointer;
    
    span.firstLetter{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--grey2);
        color: var(--grey4);
        width: 22px;
        height: 22px;
        border-radius: 100%;
        margin-right: 0.5rem;

        ${props => props.isSelected && css`
            background-color: var(--positive);
            color: var(--white);
        `}
    }

    :hover {
        filter: brightness(1.1);

        span {
            background-color: var(--positive);
            color: var(--white);
        }
    }
`

export function SelectTab({ label, ...rest }) {
    return(
        <SelectTabStyles {...rest}>
            {label}
        </SelectTabStyles>
    )
} 

export function SelectOptions({ label, ...rest }) {
    return(
        <SelectOptionsStyles {...rest}>
            <PlusSelectIcon/>{label}
        </SelectOptionsStyles>
    )
}

export function SelectedOptions({ label, ...rest }) {
    return(
        <SelectOptionsStyles {...rest}>
            <CheckSelectedIcon/>{label}
        </SelectOptionsStyles>
    )
}

export function SelectList({ label, ...rest }) {

    return(
        <SelectListStyles {...rest}>
            <span className="firstLetter">{label.charAt(0)}</span>{label}
        </SelectListStyles>
    )
}