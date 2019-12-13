import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    //1st Note
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    //   4th Note
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    //   3rd Note
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setSpans({ spans });
  };

  render() {
    //to shorten the code, not necessary but it looks nice
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* 2nd Note */}
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;

//Ref's
// 1. Create Ref using "React.createRef()", and assigned to class properties and must be inside the constructor or function inside the class.
// 2. The Ref is attached to DOM Element... in this case "<img/>"
// 3. "current" in the function: It refers to the element the ref is currently attached to, and is used extensively to access and modify our attached element.
// 4. At the "componentDidMount" lifecycle stage, "imageRef.current" will as expected be assigned to our <img> element; componentDidMount is generally a safe place to process some initial setup with refs.
