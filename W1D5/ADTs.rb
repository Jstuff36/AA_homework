class Stack

  attr_reader :stack

  def initialize
    @stack = []
  end

  def add(el)
    stack.push(el)
  end

  def remove
    stack.pop
  end

  def show
    p stack
  end

end

class Queue

  attr_reader :queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    queue.unshift(el)
  end

  def dequeue
    queue.pop
  end

  def show
    p queue
  end

end

class My_Map

  attr_reader :my_map

  def initialize
    @my_map = []
  end

  def assign(key, value)
    if lookup(key)
      my_map.each_with_index do |pair, i|
        my_map[i][1] = value if key == pair[0]
      end
    else
      my_map << [key, value]
    end

  end

  def lookup(key)
    my_map.each do |pair|
      return pair[1] if pair[0] == key
    end
    false
  end

  def remove(key)
    my_map.each_with_index do |pair, i|
      my_map.delete_at(i) if pair[0] == key
    end
  end

end
