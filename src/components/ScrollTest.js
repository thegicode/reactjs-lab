import React from 'react';
import '../css/scrolltest.css';

class ScrollTest extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        isNavFix: false
    };

    this.nav = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll (navTop) {
    const isFix = window.scrollY > navTop ? true : false;
    if (isFix !== this.state.isNavFix) {
      this.setState ({
        isNavFix: isFix
      })
    }
  }

  componentDidMount () {
    console.log('componentDidMount')

    const navEl = this.nav.current;
    const navTop = navEl.offsetTop;
    window.addEventListener('scroll', () => {
      this.handleScroll(navTop)
    });

  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render () {
    console.log('render')

    return (
        <div className="scrollTest">
          <h2>Scroll Test</h2>
          
            <div className="div">
              <header className="nav" ref={this.nav} data-fix={this.state.isNavFix}></header>
            </div>
        </div>
    );
  }
}

export default ScrollTest;

