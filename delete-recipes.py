import requests

# URL base do seu servidor
base_url = "http://iagocampista.live/delete/"

# Função para deletar receitas
def deletar_receitas():
    for recipe_id in range(1946, 1968):  # IDs de 30 a 90
        url = f"{base_url}{recipe_id}"
        response = requests.delete(url)
        if response.status_code == 204:
            print(f"Receita com ID {recipe_id} deletada com sucesso.")
        else:
            print(f"Falha ao deletar receita com ID {recipe_id}. Status: {response.status_code}")

# Executa a função
deletar_receitas()
