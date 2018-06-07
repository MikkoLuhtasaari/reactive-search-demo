import React, {Component} from "react";
import SearchFilters from "./SearchFilters"

class Header extends Component {
        state = {
            visible: false
        };

    toggleVisibility = () => {
        const visible = !this.state.visible;
        this.setState({
            visible
        })
    };

    render() {
        return (
            <nav className={`navbar ${this.state.visible ? "active" : ""}`}>
                <div className="title">GitExplore</div>
                {/*Should not be a div with onClick*/}
                <div className="btn toggle-btn" onClick={this.toggleVisibility}>Toggle filters</div>
                <SearchFilters {...this.props} visible={this.state.visible}/>
            </nav>
        )
    }
}

export default Header