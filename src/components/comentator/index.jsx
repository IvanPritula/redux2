import React  from 'react'
import { connect } from 'react-redux'
import { addCommentsAction } from '../../store/actions/actionCreators'

 export const Commentator = props => {
  return (
    <div>
      <button
        onClick={() => {
          const action = addCommentsAction({ id: Math.random(), text: 'Comment1', isDone: true })
          props.dispatch(action);
        }}
      >
        Add comment
      </button>
      <ul>
        {props.comments.list.map(
          
          (comments) => (
            <li key={comments.id}>{ comments.text }</li>
          )
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (store) => ({comments: store.comments})

export default connect(mapStateToProps)(Commentator)