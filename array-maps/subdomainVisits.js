/*
  A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

  Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

  We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

  Example 1:
  Input:
  ["9001 discuss.leetcode.com"]
  Output:
  ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
  Explanation:
  We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

  Example 2:
  Input:
  ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
  Output:
  ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
  Explanation:
  We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

  Notes:

  The length of cpdomains will not exceed 100.
  The length of each domain name will not exceed 100.
  Each address will have either 1 or 2 "." characters.
  The input count in any count-paired domain will not exceed 10000.
  The answer output can be returned in any order.

*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

/*
    i: an array of domain, which can make up subdomains
    o: an array of subdomains that contain both its total count and its subdomain name
    e: assuming that the first column is consisted of number and second column is consisted of the domains
    strategy:
        - this question involves iteration
            - first, iterate over each element (string) inside the array
             - two information that we need to consider:
                - 1. the count of the domain
                - 2. its domain and subdomain names
            - create a variable to store the name by splitting each string by space (' ')
            - create two variables:
                - one to store the number (make sure to convert the first string to number) and second to store the string of its domain and subdomain names
            - inner traverse over the second column (subdomain) and split each one by period ('.')
                - create a variable to store the subdomain by creating a copy of it using slice based on the current index position and the length of each subdomain. This will store in a hashMap with the number of subdomain as the key and the total count as its value
        - lastly, traverse oveer the object and push each property using template literal to push into an array to get the output result.

    evuation of time and space complexity:
        - time: O(n)
        - space: O(n)
*/

var subdomainVisits = function (cpdomains) {
  const hashMap = {};
  const visitsAndItsDomain = [];
  for (const website of cpdomains) {
    const wesbiteArray = website.split(' '); // ["900" , "discuss.leetcode.com"]
    const visits = Number(wesbiteArray[0]);
    const domains = wesbiteArray[1].split('.'); // ["discuss", "leetcode", "com"];
    for (let i = 0; i < domains.length; i++) {
      const subDomain = domains.slice(i).join('.');
      if (!hashMap[subDomain]) hashMap[subDomain] = 0;
      hashMap[subDomain] += visits;
    }
  }
  for (const subDomain in hashMap) {
    visitsAndItsDomain.push(`${hashMap[subDomain]} ${subDomain}`);
  }
  return visitsAndItsDomain;
};

/*
  time: O(n)
  space: O(n)
*/

