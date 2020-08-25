import React from 'react'
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } from '../redux/actionTypes';
import { setFilter } from '../redux/actions';
import { connect } from 'react-redux';

class VisibilityFilter extends React.Component {

    render() {
        return (
            <div className='align'>
                <button onClick= {() => this.props.dispatch(setFilter(FILTER_ALL))}>{FILTER_ALL}</button>
                <button onClick= {() => this.props.dispatch(setFilter(FILTER_COMPLETED))}>{FILTER_COMPLETED}</button>
                <button onClick= {() => this.props.dispatch(setFilter(FILTER_INCOMPLETE))}>{FILTER_INCOMPLETE}</button>
            </div>
        )
    }
}

export default connect()(VisibilityFilter);