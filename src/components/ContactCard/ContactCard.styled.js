

import styled from 'styled-components';

export const ItemStyle = styled.li`
display: flex;
justify-content: space-between;
align-items:center;
width: 100%;
margin-bottom: 5px;
padding: 5px;
border: 1px solid ${p => p.theme.colors.muted};
box-shadow:
inset 0 0 50px hsla(0,0%,0%,.2),
inset 0px 1px 1px #999,
inset 0px 2px 0px #888,
inset 0px 3px 0px #777,
inset 0px 4px 0px #666,
inset 0px 5px 0px #555,
inset 0px 6px 0px #444,
inset 0px 7px 0px #333,
inset 0px 8px 2px #001135;
`
