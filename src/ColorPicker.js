import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    return (
      <div>
        <button onClick={this.toggleColorList}>Pick a color</button>
        {isOpen && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <p>You picked: {selectedColor}</p>
        )}
      </div>
    );
  }
}

export default ColorPicker;
