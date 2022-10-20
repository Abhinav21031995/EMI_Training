// See https://aka.ms/new-console-template for more information

using System.Security.Principal;

namespace BankMgtApp
{
    public class SavingAccount : AccountDetails
    {
        double balance;


        public override void Deposit(double amount)
        {
            Console.WriteLine("Your current balance is {0}", balance);
            if (amount > 500)
            {
                balance = balance + amount;
                Console.WriteLine("Thank you for deposite your total balance is {0}", balance);
            }
            else
            {
                Console.WriteLine("Deposite must be greater than 500");
            }
        }
        public void Withdraw(double amount)
        {
            if (balance < amount)
            {
                Console.WriteLine("you cannot withdraw amount due to insufficient balance");
            }
            else
            {
                balance -= amount;
                Console.WriteLine("your total balance is {0}", balance);
            }
        }
        public double Balance { get { return balance; } }
    }
}

