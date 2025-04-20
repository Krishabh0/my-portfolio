import './style.scss'

const pageHeaderContent = (props) =>{
    const {HeaderText,icon} = props;
    return (
        <div className="wrapper">

            <h2>{HeaderText}</h2>
            <span>{icon}</span>
        </div>
    );

};
export default pageHeaderContent;