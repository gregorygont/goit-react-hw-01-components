import user from './Profile/user.json';
import { Profile } from './Profile/Profile';


import { GlobalStyle } from '../GlobalStyle';
import { Box } from './Box';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      as="main"
      px={5}
      py={3}
      width={1}
      bg="muted">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
       <GlobalStyle /> */}
    </Box>
  );
};
