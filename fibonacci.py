def fibonacci(numero):
    
    num1, num2 = 0, 1

    if numero < 0:
        print("Número inválido")
        return

    if numero == 0 or numero == 1:
        print(f"O número {numero} pertence à sequência de Fibonacci.")
        return

    # Criando a sequência
    while num2 < numero:
        proximo_num = num1 + num2
        num1 = num2
        num2 = proximo_num

    if num2 == numero:
        print(f"O número {numero} pertence à sequência de Fibonacci.")
    else:
        print(f"O número {numero} não pertence à sequência de Fibonacci.")

# Testando a função com o número 32
fibonacci(34)
