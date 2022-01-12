import styled from 'styled-components';
import { ReactComponent as PlusAddIcon } from '../../../assets/icons/plusAdd.svg'
import { ReactComponent as ReplaceIcon } from '../../../assets/icons/replace.svg'
import { ReactComponent as DownloadIcon } from '../../../assets/icons/download.svg'
import { ReactComponent as TrashIcon } from '../../../assets/icons/trashCan.svg'

const TextButtonsStyles = styled.div`
    cursor: pointer;
    font-size: 0.75rem;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    color: var(--blue);
    display: flex;
    align-items: center;
    
    svg {
        margin-right: 0.5rem;
        
        & > path {
            fill: var(--blue);
        }
    }
    
    :hover {
        filter: brightness(0.9);
    }
`

export function TextButton ({ label, ...rest }) {
    return(
        <TextButtonsStyles {...rest}>
            {label}
        </TextButtonsStyles>
    )
} 

export function AddTextButton ({ label, ...rest }) {
    return(
        <TextButtonsStyles {...rest}>
            <PlusAddIcon />
            {label}
        </TextButtonsStyles>
    )
}

export function ReplaceTextButton ({ label, ...rest }) {
    return(
        <TextButtonsStyles {...rest}>
            <ReplaceIcon />
            {label}
        </TextButtonsStyles>
    )
} 

export function DownloadTextButton ({ label, ...rest }) {
    return(
        <TextButtonsStyles {...rest}>
            <DownloadIcon />
            {label}
        </TextButtonsStyles>
    )
} 

export function DeleteTextButton ({ label, ...rest }) {
    return(
        <TextButtonsStyles {...rest}>
            <TrashIcon />
            {label}
        </TextButtonsStyles>
    )
} 

