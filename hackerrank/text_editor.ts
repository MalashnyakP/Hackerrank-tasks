/*
    Назва задачі: Simple Text Editor
    Рівень задачі: Medium
    Опис:
    Implement a simple text editor. The editor initially contains an empty string S.
    Perform n operations of following types:
    1. append(W) - append W string to the end of S.
    2. delete(k) - delete k chars from end.
    3. print(k) - print k-th char.
    4. undo() - undo the last editing operation.
    
    Example:
    Input: 
    8       
    1 abc
    3 3  
    2 3
    1 xy
    3 2
    4 
    4 
    3 1

    Output: c y a
    Explanation:
    Create stack which represents history of editing string S.
    Iterate throught commands array and to operations. 

    Time complexity: O(n)
 */


const inputLines = ['n', 'commands'];

function main() {
    let str = '';
    const strHistory: string[] = [''];
    
    const n: number = +inputLines[0];
    
    for (let i = 1; i <= n; i++) {
        const commands = inputLines[i].split(' ');
        
        switch (commands[0]) {
            case '1': {
                strHistory.push(str);
                str += commands[1];
                break;
            }
            
            case '2': {
                strHistory.push(str);
                str = str.slice(0, -commands[1]);
                break;
            }
            
            case '3': {
                console.log(str.charAt(+commands[1] - 1));
                break;
            }
            
            case '4': {
                str = strHistory.pop();
                break;
            }
        } 
    }
}