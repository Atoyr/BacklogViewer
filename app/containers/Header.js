import React, { Component, PropTypes } from 'react'
import CreateReact from 'create-react-class'
import { connect } from 'react-redux'
import { requestSpaceInfoAsync } from '../actions/backlogAction'
import { requestProjectsAsync} from '../actions/backlogAction'
import { selectedProject} from '../actions/backlogAction'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
        spaceInfo: state.spaceInfo,
        projects: state.projects,
        selectProject: state.selectedProject
})

function mapDispatchToProps(dispatch) {
    return {
        getSpaceInfoAsync: (value) => {dispatch(requestSpaceInfoAsync(value))},
        getProjectInfoAsync: (value) => {dispatch(requestProjectsAsync(value))},
        selectedProject: (value) => {dispatch(selectedProject(value))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

