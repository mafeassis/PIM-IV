# 1. Fazer login

**Ator:** administrador.

Somente classes do projeto e o caminho feliz. O fluxo termina na abertura da
tela principal, sem detalhar inicializacao, estilizacao ou consulta de usuarios.

## Diagrama de classes

`LoginResponse` e um record do C#. `User` e a entidade do backend.
Linha continua indica associacao; linha tracejada indica dependencia.

```mermaid
classDiagram
    namespace Desktop {
        class LoginForm {
            -AdminApiClient apiClient
            -UserSession session
            -LoginButton_Click(sender, e) void
        }
        class AdminApiClient {
            +LoginAsync(email, password) Task~LoginResponse~
            -SendAsync~T~(method, route, body, requiresAuthentication) Task~T~
        }
        class LoginResponse {
            <<record>>
            +string AccessToken
        }
        class UserSession {
            +string AccessToken
            +SetToken(token) void
            +Clear() void
        }
        class ApiException {
            +int StatusCode
        }
        class MainForm {
            -AdminApiClient apiClient
            -UserSession session
        }
    }
    namespace Backend {
        class AuthController {
            -AuthService authService
            +login(dto)
        }
        class LoginDto {
            +string email
            +string password
        }
        class AuthService {
            -UsersService usersService
            +login(email, password)
            -passwordMatches(password, passwordHash)
        }
        class UsersService {
            +findByEmail(email)
        }
        class User {
            +string id
            +string name
            +string email
            +string passwordHash
            +UserRole role
            +boolean isActive
        }
    }

    LoginForm --> AdminApiClient : apiClient
    LoginForm --> UserSession : session
    LoginForm ..> LoginResponse : recebe
    LoginForm ..> ApiException : captura
    LoginForm ..> MainForm : cria
    MainForm --> AdminApiClient : apiClient
    MainForm --> UserSession : session
    AdminApiClient ..> LoginResponse : desserializa e retorna
    AdminApiClient ..> ApiException : cria e lanca
    AdminApiClient ..> AuthController : HTTP POST /auth/login
    AuthController --> AuthService : authService
    AuthController ..> LoginDto : recebe
    AuthService --> UsersService : usersService
    AuthService ..> User : verifica credenciais e status
    UsersService ..> User : consulta
```

## Diagrama de sequencia

Frontend a esquerda e backend a direita. Os DTOs e a entidade aparecem como
dados das mensagens. `ApiException` nao participa do caminho feliz.
Operacoes herdadas, como `Hide` e `ShowDialog`, sao indicadas sem adicionar
classes do framework.

```mermaid
sequenceDiagram
    actor Admin as Administrador
    box Frontend - Desktop
        participant Tela as LoginForm
        participant Sessao as UserSession
        participant Principal as MainForm
        participant Api as AdminApiClient
    end
    box Backend
        participant Controller as AuthController
        participant Auth as AuthService
        participant Users as UsersService
    end

    Admin->>Tela: Informa e-mail e senha e clica em Entrar
    Tela->>Tela: Valida campos preenchidos
    Tela->>Api: LoginAsync(email, password)
    Api->>Controller: POST /auth/login
    Controller->>Auth: login(dto.email, dto.password)
    Auth->>Users: findByEmail(email)
    Users-->>Auth: User
    Auth->>Auth: Verifica usuario ativo e confere a senha
    Note over Auth: Gera o token JWT
    Auth-->>Controller: accessToken
    Controller-->>Api: HTTP 201 com accessToken
    Api-->>Tela: LoginResponse
    Tela->>Sessao: SetToken(response.AccessToken)
    Tela->>Tela: Hide()
    Tela->>Principal: new MainForm(apiClient, session)
    Tela->>Principal: ShowDialog(this)
```

**Regra atual:** o endpoint aceita qualquer usuario ativo com senha correta.
A permissao de administrador e exigida na consulta de usuarios da `MainForm`.

**Fontes:** `apps/desktop/src/EduQuest.Admin.Desktop/` e `apps/server/src/`,
especialmente `LoginForm.cs`, `Networking/AdminApiClient.cs`,
`auth/auth.controller.ts`, `auth/auth.service.ts` e `users/users.service.ts`.
