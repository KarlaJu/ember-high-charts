export default function() {
 this.get('users/current', () => {
    return {
      username: 'carlogilmar',
      email: 'carlogilmar12@gmail.com',
      name: 'Carlo Gilmar'
    };
  });
}
