export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  if (body.email === 'aa@aa.aa' && body.password === 'aa') {
    return {
      data: {
        user: {
          name: 'Admin',
          email: body.email,
        },
        token: 'TOKEN1234#',
      },
    };
  }

  return {
    error: {
      message: 'Unauthenticated',
    },
  };
});
