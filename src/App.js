import React, { Component } from "react";
import "./App.css"
import Greet from "./profile/component";


class app extends Component {
    render() {
        return (
            <div className="app">
                    < Greet name="yacine" fname="Babour" >
                        <img style={{width:100 , height:100, display:"inline"}} src="/Space-Wallpaper-4K-UHD-3840x2160-86.jpg" />

                    </Greet>
            </div>
        );
    }
}
export default app;







