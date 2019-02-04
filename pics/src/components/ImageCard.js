import React from 'react';

export default class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={spans:0};
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.addEventListener('load',this.setSpan );
    }

    setSpan= () => {
        const spans = Math.ceil(this.ref.current.clientHeight /10);
        this.setState({spans : spans});    
    }

    render() {
        const {description,urls} = this.props.image;
        return (
            <div style={{ gridRowEnd:`span ${this.state.spans}` }}>
                <img ref={this.ref} alt={description}  src={urls.regular} />
            </div>
        )
    }

}