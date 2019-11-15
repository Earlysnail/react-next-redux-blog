
const GET_MEMBER_LIST = 'GET_MEMBER_LIST'

export function getMemberList(state, action) {
  switch (action.type) {
    case 'GET_MEMBER_LIST': return Object.assign({}, state, { memberList: action.data })
  }
}