import './Button.sass'

export default function Button (props) {
    return (
        <a href={props.link} className={'btn' + ' ' + 'btn_' + props.variant}>{props.text}</a>
    )
}