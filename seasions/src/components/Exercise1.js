import React from 'react'

export default class Exercise1 extends React.Component {
    render() {
        return (
            <div className="form-control">
                <label> Enter UserName : </label>
                <input type="text" name="name" />
            </div>
        )
    }
}
