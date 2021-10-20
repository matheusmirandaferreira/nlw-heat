import axios from 'axios';

/**
 * Receber code (string)
 * Recuperar o access_token no github
 * Verificar se o user existe no DB
 *   ? SIM => gerar token
 *   ? NÃO => criar no DB e gerar o token
 * Retornar o token com as infos para o user
 */

class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token';

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        "Accept": "application/json"
      }

    });
    return response.data;
  }
}

export { AuthenticateUserService };
