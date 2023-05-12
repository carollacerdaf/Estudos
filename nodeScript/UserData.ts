export default class UserData {
    
    setBasicInfo(cpf, device_id, email) {
            return {
                "device_id": device_id,
                "cpf": cpf,
                "password": "senha123",
                "email": email,
                "legal_name": "fooi",
                "display_name": "dsds"
            }
    }
}